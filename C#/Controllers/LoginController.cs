using Blogger_C_.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;

namespace Blogger_C_.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    //hDYIxpApAeZECKiQ
    public class LoginController : ControllerBase
    {
       
        [HttpPost]
        public IActionResult Post(LoginModel loginModel)
        {
            String message = "Success";

            string connectionString = @"Data Source=DESKTOP-H9T9SKL;Initial Catalog=tester; User ID=sa;Password=RPSsql12345;TrustServerCertificate=True;";
            SqlConnection connection = new SqlConnection(connectionString);
            try
            {
                connection.Open();
                Console.Write("CONNECTION open");
            }
            catch (Exception e)
            {
                message = e.Message;
            }
            String query = $"select * from proj3_userdata where email=@email and password=@password";
            try
            {
                SqlCommand command=new SqlCommand(query, connection);
                command.Parameters.AddWithValue("@email", loginModel.email);
                command.Parameters.AddWithValue("@password", loginModel.password);
                SqlDataReader reader = command.ExecuteReader();
               if(reader.HasRows)
                {
                 
                    reader.Close();
                    return Ok("SUCCESS");
                }
                else
                {

                    reader.Close();
                    return BadRequest("NOT DETECTED");
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            connection.Close();
            return BadRequest("NOT DETECTED");

        }
    }
}
