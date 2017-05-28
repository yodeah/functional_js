/**
 * Created by root on 2017. 04. 19..
 */


function addAMonthOfSubscriptionToUser(username) {
    user = db.getUserByUsername(username);
    user = addAMonthOfSubscription(user);
    db.saveUser(user);
}

function addAYearOfSubscriptionToUser(username) {
    user = db.getUserByUsername(username);
    user = addAYearOfSubscription(user);
    db.saveUser(user);
}

function cancelSubscriptionForUser(username) {
    user = db.getUserByUsername(username);
    user = cancelSubscription(user);
    db.saveUser(user);
}


addAMonthOfSubscriptionToUser("Jay");
addAYearOfSubscriptionToUser("Bob");
cancelSubscriptionForUser("Dante");


modifyUser = function(modification){
   return function(username) {
       user = db.getUserByUsername(username);
       user = modification(user);
       db.saveUser(user)
   }
}

addAMonthOfSubscriptionToUser = modifyUser(addAMonthOfSubscription);
addAYearOfSubscriptionToUser = modifyUser(addAYearOfSubscription);
cancelSubscriptionForUser = modifyUser(cancelSubscription);
