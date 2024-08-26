#!/bin/bash

# Base directory
BASE_DIR="src"

# Create base directories
mkdir -p $BASE_DIR/{app,assets/images,environments}

# Create core module structure
mkdir -p $BASE_DIR/app/core/{guards,interceptors,models,services,utils}

# Create shared module structure
mkdir -p $BASE_DIR/app/shared/{components/{footer,header},directives}

# Create feature modules structure
mkdir -p $BASE_DIR/app/features/{auth/{login,register},home,league/{create,view},challenges,communities,create,group,invite-friends,statistics,ranking,user/{profile,settings}}

# Create main files
touch $BASE_DIR/index.html
touch $BASE_DIR/main.ts
touch $BASE_DIR/main.server.ts
touch $BASE_DIR/styles.css

# Create environment files
touch $BASE_DIR/environments/environment.prod.ts
touch $BASE_DIR/environments/environment.ts

# Create core module files
touch $BASE_DIR/app/core/guards/auth.guard.ts
touch $BASE_DIR/app/core/interceptors/auth.interceptor.ts
touch $BASE_DIR/app/core/models/{league.model.ts,user.model.ts}
touch $BASE_DIR/app/core/services/{api.service.ts,auth.service.ts}
touch $BASE_DIR/app/core/utils/date.util.ts

# Create shared module files
touch $BASE_DIR/app/shared/components/footer/footer.component.ts
touch $BASE_DIR/app/shared/components/header/{header.component.html,header.component.ts}
touch $BASE_DIR/app/shared/directives/highlight.directive.ts

# Create feature module files
touch $BASE_DIR/app/features/auth/login/{login.component.css,login.component.html,login.component.ts}
touch $BASE_DIR/app/features/auth/register/{register.component.css,register.component.html,register.component.ts}
touch $BASE_DIR/app/features/home/{home.component.css,home.component.html,home.component.ts}
touch $BASE_DIR/app/features/league/create/{create-league.component.css,create-league.component.html,create-league.component.ts}
touch $BASE_DIR/app/features/league/view/{view-league.component.css,view-league.component.html,view-league.component.ts}
touch $BASE_DIR/app/features/challenges/{challenges.component.css,challenges.component.html,challenges.component.ts}
touch $BASE_DIR/app/features/communities/{communities.component.css,communities.component.html,communities.component.ts}
touch $BASE_DIR/app/features/create/{create.component.css,create.component.html,create.component.ts}
touch $BASE_DIR/app/features/group/{group.component.css,group.component.html,group.component.ts}
touch $BASE_DIR/app/features/invite-friends/{invite-friends.component.css,invite-friends.component.html,invite-friends.component.ts}
touch $BASE_DIR/app/features/statistics/{statistics.component.css,statistics.component.html,statistics.component.ts}
touch $BASE_DIR/app/features/ranking/{ranking.component.css,ranking.component.html,ranking.component.ts}
touch $BASE_DIR/app/features/user/profile/{profile.component.css,profile.component.html,profile.component.ts}
touch $BASE_DIR/app/features/user/settings/{settings.component.css,settings.component.html,settings.component.ts}

# Create app module and routing files
touch $BASE_DIR/app/{app.component.css,app.component.html,app.component.ts,app.module.ts,app-routing.module.ts}

# Confirm creation
echo "Angular project folder structure has been created successfully!"
#!/bin/bash

# Base directory
BASE_DIR="src"

# Create base directories
mkdir -p $BASE_DIR/{app,assets/images,environments}

# Create core module structure
mkdir -p $BASE_DIR/app/core/{guards,interceptors,models,services,utils}

# Create shared module structure
mkdir -p $BASE_DIR/app/shared/{components/{footer,header},directives}

# Create feature modules structure
mkdir -p $BASE_DIR/app/features/{auth/{login,register},home,league/{create,view},challenges,communities,create,group,invite-friends,statistics,ranking,user/{profile,settings}}

# Create main files
touch $BASE_DIR/index.html
touch $BASE_DIR/main.ts
touch $BASE_DIR/main.server.ts
touch $BASE_DIR/styles.css

# Create environment files
touch $BASE_DIR/environments/environment.prod.ts
touch $BASE_DIR/environments/environment.ts

# Create core module files
touch $BASE_DIR/app/core/guards/auth.guard.ts
touch $BASE_DIR/app/core/interceptors/auth.interceptor.ts
touch $BASE_DIR/app/core/models/{league.model.ts,user.model.ts}
touch $BASE_DIR/app/core/services/{api.service.ts,auth.service.ts}
touch $BASE_DIR/app/core/utils/date.util.ts

# Create shared module files
touch $BASE_DIR/app/shared/components/footer/footer.component.ts
touch $BASE_DIR/app/shared/components/header/{header.component.html,header.component.ts}
touch $BASE_DIR/app/shared/directives/highlight.directive.ts

# Create feature module files
touch $BASE_DIR/app/features/auth/login/{login.component.css,login.component.html,login.component.ts}
touch $BASE_DIR/app/features/auth/register/{register.component.css,register.component.html,register.component.ts}
touch $BASE_DIR/app/features/home/{home.component.css,home.component.html,home.component.ts}
touch $BASE_DIR/app/features/league/create/{create-league.component.css,create-league.component.html,create-league.component.ts}
touch $BASE_DIR/app/features/league/view/{view-league.component.css,view-league.component.html,view-league.component.ts}
touch $BASE_DIR/app/features/challenges/{challenges.component.css,challenges.component.html,challenges.component.ts}
touch $BASE_DIR/app/features/communities/{communities.component.css,communities.component.html,communities.component.ts}
touch $BASE_DIR/app/features/create/{create.component.css,create.component.html,create.component.ts}
touch $BASE_DIR/app/features/group/{group.component.css,group.component.html,group.component.ts}
touch $BASE_DIR/app/features/invite-friends/{invite-friends.component.css,invite-friends.component.html,invite-friends.component.ts}
touch $BASE_DIR/app/features/statistics/{statistics.component.css,statistics.component.html,statistics.component.ts}
touch $BASE_DIR/app/features/ranking/{ranking.component.css,ranking.component.html,ranking.component.ts}
touch $BASE_DIR/app/features/user/profile/{profile.component.css,profile.component.html,profile.component.ts}
touch $BASE_DIR/app/features/user/settings/{settings.component.css,settings.component.html,settings.component.ts}

# Create app module and routing files
touch $BASE_DIR/app/{app.component.css,app.component.html,app.component.ts,app.module.ts,app-routing.module.ts}

# Confirm creation
echo "Angular project folder structure has been created successfully!"

