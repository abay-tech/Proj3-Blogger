using Blogger_C_.Models;
using DataAccessLayer.Models;
using System.Data;
using System.Data.SqlClient;
using System.Reflection.PortableExecutable;

namespace DataAccessLayer
{
    public class LoginDAL
    {
    public SqlConnection? RequestConnection()
        {
         string connectionString = @"Data Source=DESKTOP-H9T9SKL;Initial Catalog=tester; User ID=sa;Password=RPSsql12345;TrustServerCertificate=True;";
            SqlConnection connection = new SqlConnection(connectionString);
            try
            {
                connection.Open();
               return connection;
            }
            catch (Exception e)
            {
                Console.Write("Error:" + e);

            }
            return null;
        }
    public bool? CheckUser(string email)
        {
            SqlConnection? connection = RequestConnection();

            if (connection == null)
                return null;
            string query = $"select * from proj3_userdata where email=@email";
            try
            {
                SqlCommand command = new SqlCommand(query, connection);
                command.Parameters.AddWithValue("@email", email);
                SqlDataReader reader = command.ExecuteReader();
                if (reader.HasRows)
                {
                    reader.Read();
                    UserDataModel userData = new UserDataModel();
                    userData.userName = reader.GetString(3);
                    reader.Close();
                    return true;
                }

                reader.Close();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return null;
            }
            connection.Close();
            return false;
        }
    public UserDataModel? LoginPasswordDAL(LoginModel loginModel)
        {

            SqlConnection? connection = RequestConnection();

            if(connection==null)
                return null;
           
            string query = $"select * from proj3_userdata where email=@email and password=@password";
                              
            try
            {
                SqlCommand command = new SqlCommand(query, connection);
                command.Parameters.AddWithValue("@email", loginModel.email);
                command.Parameters.AddWithValue("@password", loginModel.password);
                SqlDataReader reader = command.ExecuteReader();
                if (reader.HasRows)
                {
                    reader.Read();
                    UserDataModel userData=new UserDataModel();
                    userData.userName = reader.GetString(3);
                    reader.Close();
                    return userData;
                }
                reader.Close();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            connection.Close();
            return null;

        }
    public bool? CreateUSerPasswordDAL(UserDataModel userDataModel)
        {
            SqlConnection? connection = RequestConnection();
            if (connection == null)
                return null;
            string query = $"insert into proj3_userdata values(@email,@password,@username)";

            try
            {
                SqlCommand command = new SqlCommand(query, connection);
                command.Parameters.AddWithValue("@email", userDataModel.email);
                command.Parameters.AddWithValue("@password", userDataModel.password);
                command.Parameters.AddWithValue("@username", userDataModel.userName);


                var rowsAffected = command.ExecuteNonQuery();
                if (rowsAffected > 0)
                {
                    return true;
                }
                
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            connection.Close();
            return null;
        }
    }
}