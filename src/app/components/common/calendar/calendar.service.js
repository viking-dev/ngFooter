(function() {
    'use strict';

    angular
        .module('footer')
		.service('calendarService', calendarService); 
      
    /** @ngInject */  
    function calendarService() {
        var api = this; 
        
        /* Methodes */
        api.addAvailability = addAvailability; 
        api.fetchAvailability = fetchAvailability;
        api.fetchAvailabilities = fetchAvailabilities;
        api.buildUsersOfAvailabilities = buildUsersOfAvailabilities;
        api.fetchEvent = fetchEvent;
  
        /**
         * Add the availability in the availabilities array 
         * @method addAvailability
         * @param availabilities
         * @param date
         * @param hours
         * @param mode
         */
        function addAvailability (availabilities, date, hours, mode) {
            availabilities.push({
                Date: date,
                Hours: hours,
                Mode: mode
            });
        }
        
        /**
         * Fetch the availability which match with the parameters
         * @method fetchAvailability
         * @param availabilities
         * @param date
         * @param hours
         * @return availability
         */ 
    	function fetchAvailability (availabilities, date, hours) {
            for (var i = 0; i < availabilities.length; i++) {
                if (availabilities[i].Date === date && availabilities[i].Hours === hours) {
                    return availabilities[i];
                }
            }
        }
        
        /**
         * Fetch the availabilities which match with the parameters
         * @method fetchAvailabilities
         * @param availabilities
         * @param date
         * @param hours
         * @return availabilities
         */ 
    	function fetchAvailabilities (availabilities, date, hours) {
            var list = [];
            for (var i = 0; i < availabilities.length; i++) {
                if (availabilities[i].Date === date && availabilities[i].Hours === hours) {
                    list.push(availabilities[i]);
                }
            }
            
            return list;
        }
        
        /**
         * Build the users table of each availabilities
         * @method fetchUsersOfAvailabilities
         * @param availabilities
         * @return users
         */ 
    	function buildUsersOfAvailabilities (availabilities) {
            var users = [];
            for (var i = 0; i < availabilities.length; i++) {
                users.push(availabilities[i].User);
            }
            
            return users;
        }
        
        /**
         * Fetch the event which match with the parameters
         * @method fetchEvent
         * @param events
         * @param date
         * @param hours
         * @return availability
         */ 
    	function fetchEvent (events, date, hours) {
            for (var i = 0; i < events.length; i++) {
                if (events[i].Date === date && events[i].Hours === hours) {
                    return events[i];
                }
            }
        }
    
        return api;
    }
})();