export default class Projects {
    constructor(AppConstants, $http, $q) {
      'ngInject';
  
      this._AppConstants = AppConstants;
      this._$http = $http;
      this._$q = $q;
  
  
    }
  
    getProjects() {
        return this._$http({
            url: `${this._AppConstants.api}/projects`,
            method: 'GET'
        }).then((res) => res.data.projects);
    }

    setProjects(project){
        return this._$http({
            url: `${this._AppConstants.api}/projects`,
            method: 'POST',
            data: project
        })
    }

    updateProject(project){
        return this._$http({
            url: `${this._AppConstants.api}/projects`,
            method: 'PUT',
            data: project
        })
    }

    getProject(slug) {
        return this._$http({
            url: this._AppConstants.api + '/projects/' + slug,
            method: 'GET',
        }).then((res) => res.data.projects);
    }

    setPay(token){
        return this._$http({
            url: `${this._AppConstants.api}/projects/pay`,
            method: 'PUT',
            data: token
        })
    }
  
  }
  