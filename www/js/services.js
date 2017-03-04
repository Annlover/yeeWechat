angular.module('starter.services', [])

  .factory("$singleton", function () {
    return function (fn) {
      var flag;

      function singleton() {
        if (flag) {
          return flag;
        }
        flag = fn.apply(this, arguments);
        return flag;
      }

      return singleton;
    };
  })

  .factory("$toggle", function () {
    return function (fun1, fun2) {
      if (typeof fun1 != "function" || typeof fun2 != "function") {
        return;
      }
      var toggle;
      return function () {
        toggle && fun1();
        !toggle && fun2();
        toggle = !toggle;
      };
    };
  })

  .factory("$scopeData", function () {
    var scopeData = {};

    return {
      set: function (key, object) {
        if (scopeData[key]) {
          scopeData[key] = object;
          return;
        }
        scopeData[key] = object;
      },
      get: function (key) {
        return scopeData[key];
      }
    };
  })

  .factory("$remote", function ($restful) {

    function dealData(data, successCallback, errorCallback) {
      if (data.statusCode == 'AAAAAAA') {
        if (typeof successCallback == "function") {
          successCallback(data, status, headers, config);
        }
      } else {
        if (typeof errorCallback == "function") {
          errorCallback(data, status, headers, config);
        }
      }
    }

    function get(url, successCallback, errorCallback) {
      return $http.get(url).success(function (data, status, headers, config) {
        dealData(data, successCallback, errorCallback);
      }).error(function (data, status, headers, config) {
        alert(status);
      });
    }

    function post(url, requestData, successCallback, errorCallback) {
      return $http.post(url, requestData).success(function (data, status, headers, config) {
        dealData(data, successCallback, errorCallback);
      }).error(function (data, status, headers, config) {
        alert(status);
      });
    }

    return {
      post: post,
      get: get
    };
  });

