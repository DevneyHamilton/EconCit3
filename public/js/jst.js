console.log("loading jst.js")
window.JST = {};

window.JST['login'] = _.template(
	'<div>\
        <h4>Sign into the Economic Citizenship App:</h4>\
        <div id="account-wall">\
            <form id="login-form" class="form-signin" action="/login" method="POST" role="form">\
            <input type="text" id="login-username" name="username" class="form-control" placeholder="Username">\
            <input type = "text"  id="login-password" name="password" class="form-control" placeholder="Password">\
            <button id="login-submit-button" class="btn btn-default" type="submit">Sign in</button>\
            </form>\
        </div>\
        <button id="register-button" class="btn btn-default" type="submit">Register for a new account.</button>\
        <div class="error-container"></div>\
    </div>'
);

window.JST['create-dialogue-content'] = _.template(
    '<p> You\'re about to create an Economic Citizenship Entry named "<%=name%>"\
    starting on <%=start_date%> and ending on <%=end_date%>. The name and dates\
    cannot be edited in the future. Do you want to create this entry or edit the name and dates now? </p>\
        '
)

window.JST['register'] = _.template(
	'<div>\
        <h4>Register for the Economic Citizenship App!</h4>\
        <div id="register-container">\
            <form id="register-form" action="/register" method="POST" role="form">\
                <div class="form-group">\
                    <label for="register-username">Username</label>\
                    <div class="sub-label"> We suggest your first name followed by the first two letters of your family name.</div>\
                    <input id="register-username" type="text" name="username" class="form-control" placeholder="FirstLa">\
                </div>\
                <div class="form-group">\
                    <label for="register-password"> Password</label>\
                    <div class="sub-label">Remember this. This early version of the app does not have password recovery.</div>\
                    <input id="register-password" type = "text" name="password" class="form-control" placeholder="Password">\
                </div>\
                <div class="form-group">\
                    <label for="register-confirm-password">Confirm Password</label>\
                    <input id="register-confirm-password" type = "text" name="confirmPassword" class="form-control" placeholder="Confirm Password">\
                </div>\
                <div class="form-group">\
                    <label for="register-email">Email</label>\
                    <input id="register-email" type="text" name="registerEmail" class="form-control" placeholder="Email">\
                </div>\
                <div class="form-group">\
                    <label for="register-county">County</label>\
                    <input id="register-county" type = "text" name="county" class="form-control" placeholder="County">\
                </div>\
                <button id="register-submit-button" class="btn btn-default" type="submit">Register</button>\
            </form>\
        </div>\
        <button id="login-button" class="btn btn-default" type="submit">Back to Login</button>\
        <div class="error-container"></div>\
    </div>'
);

window.JST['user_skeleton'] = _.template(
       '<div class="well well-sm header-well">\
            <div class="text-center">\
             <p class="center-align">\
                <button id="see-all-entries-button" class="float-left btn btn-xm">View All My Economic Citizenship Entries</button>\
               You are logged in as <%=username%>\
                <button id="logout-button" class="float-right btn btn-xm">Logout</button>\
                </p>\
            </div>\
        </div>\
        <div id="econ-cit-container"></div>'
);

window.JST['create_entry'] = _.template(
    '<h4>Create a new Economic Citizenship Entry:</h4>\
    <div id="create-dialog" class="ec-dialog">\
    </div>\
    <form class="form-inline">\
        <div class="form-group">\
            <label for="new_entry_name">Name</label>\
            <input type="text" class="form-control" placeholder="Untitled Entry" id="new-entry-name" value="Untitled Entry">\
        </div>\
        <div class="form-group">\
            <label>Start date:</label>\
            <input type="date" class="form-control" id="start-date" value="">\
        </div>\
        <div class="form-group">\
            <label>End date:</label>\
            <input type="date" class="form-control" id="end-date" value="">\
        </div>\
        <button class="btn btn-default" id="create-entry-button" class="btn btn-default">Create</button>\
    </form>\
    <div class="error-container"></div>'
);

window.JST['display_skeleton'] = _.template(
    '<div class="container center-block" id="create_entry_container"></div>\
    <div class="container center-block" id="entry-list-container">\
        <h4>Your economic citizenship entries:</h4>\
        <ul id="entry-list" class="list-group"></ul>\
    </div>'
);

window.JST['entry_display'] = _.template(
    '<li class="list-group-item"> <p> <%=entry_name%>: from <%=start_date%> to <%=end_date%>. </p><button class="center" id="edit-<%=entry_id%>" class="btn btn-default">Edit</button></li>'
);

/*This template is the skeleton for all the econ cit category 
input forms. It must be in the dom before the tabs and inputs 
are added.*/
window.JST['econ_cit_input_skeleton'] = _.template(
    '<div>\
        <small>\
        <p>You are editing <%= entry_name%>: from <%=start_date%> to <%=end_date%>.</p>\
         </small>\
     </div>\
    <div role="tabpanel">\
        <ul class="nav nav-tabs" role="tablist"></ul>\
    </div>\
    <div class="tab-content"></div>\
    <div class="well well-sm text-center">\
        <div id="score-container"></div>\
        <button class="center" id="total-score-button" class="btn btn-default">Calculate Economic Citizenship Score</button>\
        <button class="center" id="clear-score-button" class="btn btn-default">Clear Score Information</button>\
        </div>'
);

window.JST['tab_nav_basic'] = _.template(
    '<li role="presentation" ><a href="#<%= tab_title%>" aria-controls="<%= tab_title%>" role="tab" data-toggle="tab"><%= display_name%></a></li>'
);

window.JST['tab_pane_basic'] = _.template(
    '<div role="tabpanel" class="tab-pane" id="<%= tab_title%>">\
        <div class="container">\
            <h3><%= display_name%> </h3>\
            <div style="padding: 20px 20px 10px;">\
                <p>Instructions: <%=instructions%> </p>\
                <form class="user-input-form" role="form">\
                    <div id="<%= tab_title%>_inputs_container"></div>\
                    <button class="btn btn-default" id="<%= tab_title%>_save_button">Save <%= display_name%> Information</button>\
                </form>\
                <div id="<%= tab_title%>_error_container"></div>\
            <div>\
        </div>\
    </div>' 
);

window.JST['input_basic'] = _.template(
    '<div class="input-group">\
        <span class="input-group-addon"><%= input_key%>: </span>\
        <input type="text" class="form-control" placeholder="" id="<%= input_key%>_input" value="<%= input_value%>">\
    </div>'
);

console.log("done loading jst.js")