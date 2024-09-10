import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SupabaseService } from '../../../../services/supabase.service';
import { Chart, ChartType, registerables } from 'chart.js';

@Component({
  selector: 'app-features',
  templateUrl: './index.component.html'
})
export class FeaturesComponent implements OnInit, AfterViewInit {
  task: string = ''; // Current task
  activities: any[] = []; // Store distinct activities from the database
  chart: Chart | null = null; // Chart.js instance

  constructor(private supabaseService: SupabaseService) {
    Chart.register(...registerables);
  }

  ngAfterViewInit() {
    // Ensure canvas is ready before initializing the chart
    setTimeout(() => {
      this.initializeChart();
    }, 100); // Delay to make sure the canvas is rendered
  }

  async ngOnInit() {
    try {
      const response = await this.supabaseService.getAllResponses();
      console.log("Responses fetched from database:", response); // Log responses
      // Filter out duplicate activities
      this.activities = this.getDistinctActivities(response);
      // Process the data and update the graph
      this.updateGraph(response);
    } catch (error) {
      console.error('Error fetching activities:', error);
    }
  }

  // Function to get distinct activities from the responses
  getDistinctActivities(responses: any[]): any[] {
    const activitySet = new Set<string>();
    responses.forEach((response) => {
      activitySet.add(response.answer); // Use Set to automatically filter duplicates
    });
    return Array.from(activitySet).map(answer => ({ answer })); // Convert back to array of objects
  }

  // Initialize the chart
  initializeChart() {
    const ctx = document.getElementById('activityChart') as HTMLCanvasElement;
    if (!ctx) {
      console.error('Canvas element not found!');
      return;
    }

    this.chart = new Chart(ctx, {
      type: 'bar' as ChartType,
      data: {
        labels: [], // Empty initial data
        datasets: [{
          label: 'Number of Selections',
          data: [], // Empty initial data
          backgroundColor: 'rgba(54, 162, 235, 0.2)', // Bar color
          borderColor: 'rgba(54, 162, 235, 1)', // Border color
          borderWidth: 1,
        }],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  // Update the graph based on the fetched activities
  updateGraph(responses: any[]) {
    const activityCount: { [key: string]: number } = {};

    // Count the occurrences of each activity
    responses.forEach((response) => {
      const answer = response.answer;
      if (activityCount[answer]) {
        activityCount[answer]++;
      } else {
        activityCount[answer] = 1;
      }
    });

    const activityLabels = Object.keys(activityCount);
    const activityValues = Object.values(activityCount);

    if (this.chart) {
      // Update the chart data and labels
      this.chart.data.labels = activityLabels;
      this.chart.data.datasets[0].data = activityValues;
      this.chart.update(); // Refresh the chart
    } else {
      console.error("Chart instance not found");
    }
  }

  // Handle form submission
  async onSubmit() {
    if (this.task && this.task.trim() !== '') {
      await this.supabaseService.insertResponse(this.task);
      this.task = ''; // Reset task input
      // Refetch and update the graph
      const updatedResponses = await this.supabaseService.getAllResponses();
      this.updateGraph(updatedResponses); // Refresh the graph with the new data
      // Refresh the activities in the dropdown as well
      this.activities = this.getDistinctActivities(updatedResponses);
    }
  }

  // Handle dropdown selection
  onSelectActivity(event: Event) {
    const target = event.target as HTMLSelectElement | null;
    if (target && target.value) {
      this.task = target.value;
    }
  }
}
