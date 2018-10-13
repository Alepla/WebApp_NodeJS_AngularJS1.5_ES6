class ProfileCtrl {
  constructor(profile, User, projects, invested, $scope, $state,subscribe) {
    'ngInject';

    this._$scope = $scope;
    this.profile = profile;
    console.log(subscribe)

    projects.forEach((element,index) => {
      if(element.media[0]){
          if(element.media[0].split('-')[0] === 'image')
              projects[index].image = element.media[0].split('-')[1];
          else
              projects[index].video = element.media[0].split('-')[1];
      }
      projects[index].resdesc = projects[index].desc.substr(0,201) + "...";
    });

    invested.forEach((element,index) => {
      if(element.media[0]){
          if(element.media[0].split('-')[0] === 'image')
            invested[index].image = element.media[0].split('-')[1];
          else
            invested[index].video = element.media[0].split('-')[1];
      }
      invested[index].resdesc = invested[index].desc.substr(0,201) + "...";
    });

    subscribe.forEach((element,index) => {
      if(element.media[0]){
          if(element.media[0].split('-')[0] === 'image')
          subscribe[index].image = element.media[0].split('-')[1];
          else
          subscribe[index].video = element.media[0].split('-')[1];
      }
      subscribe[index].resdesc = subscribe[index].desc.substr(0,201) + "...";
    });

    this.myProjects = projects;
    this.investedProj = invested;
    this.subscribeProj = subscribe;

    this.personalProjects = true;
    this.invertedProjects = false;

    if (User.current) {
      this.isUser = (User.current.username === this.profile.username);
    } else {
      this.isUser = false;
    }

    this.seePersonalProjects = function() {
      this.invertedProjects = false;
      this.subscribeProjects = false;
      this.personalProjects = true;
    }
 
    this.seeInvertedProjects = function() {
      this.invertedProjects = true;
      this.personalProjects = false;
      this.subscribeProjects = false;
    }

    this.logOut = User.logout.bind(User);

    this._$scope.seeProj = function() {
      if(this.project){
        $state.go('app.detailsproject', {slug: this.project['slug'] });
      }else if(this.invest){
          $state.go('app.detailsproject', {slug: this.invest['slug'] });
      }else{
        $state.go('app.detailsproject', {slug: this.subscribe['slug'] });
      }
    }

    this._$scope.updateProj = function() {
      $state.go('app.updateproj', { slug: this.project['slug'] });
    }
  }
}


export default ProfileCtrl;


/*
class ProfileCtrl {
 constructor(profile, User, projects) {
   'ngInject';

   this.profile = profile;
   this.myProjects = projects;

   this.personalProjects = true;
   this.invertedProjects = false;

   this.seePersonalProjects = function() {
     this.invertedProjects = false;
     this.personalProjects = true;
   }

   this.seeInvertedProjects = function() {
     this.invertedProjects = true;
     this.personalProjects = false;
   }

   if (User.current) {
     this.isUser = (User.current.username === this.profile.username);
   } else {
     this.isUser = false;
   }

 }
}


export default ProfileCtrl;


*/
