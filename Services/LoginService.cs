using Blogger_C_.Models;
using DataAccessLayer.Models;
using System.Data;

namespace Services
{
    public class LoginService
    {
        private DataAccessLayer.LoginDAL _loginDAL;
        public LoginService()
        {
            _loginDAL = new DataAccessLayer.LoginDAL();
        }

        public UserDataModel? LoginPassword(LoginModel loginModel)
        {
            var UserExist = _loginDAL.CheckUser(loginModel.email);

            if (UserExist == true) return _loginDAL.LoginPasswordDAL(loginModel);
            else return null;

        }
        public bool? CreateUserPassword(UserDataModel userDataModel)
        {
            var UserExist = _loginDAL.CheckUser(userDataModel.email);
            if (UserExist == false)
            {
                //insert loginc to create a user model properly

                var status= _loginDAL.CreateUSerPasswordDAL(userDataModel);
                if (status == true)
                {
                    return true;
                }
            }
            else if (UserExist == true)
            {
                return false;
            }
            return null;
        }
    }
}