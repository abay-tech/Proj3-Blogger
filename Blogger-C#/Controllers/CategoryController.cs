using Blogger_C_.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;

namespace Blogger_C_.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        [HttpGet("gettop")]
        public List<CategoryModel> GetTop()
        {
            List <CategoryModel> categoryList = new List<CategoryModel>();
            string connectionString = @"Data Source=DESKTOP-H9T9SKL;Initial Catalog=tester; User ID=sa;Password=RPSsql12345;TrustServerCertificate=True;";
            SqlConnection connection = new SqlConnection(connectionString);
            try
            {
                connection.Open();
                Console.Write("CONNECTION open");
            }
            catch (Exception e)
            {
                Console.Write(e);

            }
            String query = $"select top 10 * from proj3_categorydata order by 'hits' desc ;";
            try
            {
                SqlCommand command = new SqlCommand(query, connection);
    
                SqlDataReader reader = command.ExecuteReader();
                while (reader.Read())
                {
                    CategoryModel category = new CategoryModel();
                    category.id = reader.GetInt32(0);
                    category.category_name = reader.GetString(1);
                    category.hits = reader.GetInt32(2);
                    category.image_link = reader.GetString(3);
                    categoryList.Add(category);
                }
                reader.Close();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            connection.Close();
            return categoryList;
        }

        [HttpGet("getall")]
        public List<CategoryModel> GetAll()
        {
            List<CategoryModel> categoryList = new List<CategoryModel>();
            string connectionString = @"Data Source=DESKTOP-H9T9SKL;Initial Catalog=tester; User ID=sa;Password=RPSsql12345;TrustServerCertificate=True;";
            SqlConnection connection = new SqlConnection(connectionString);
            try
            {
                connection.Open();
                Console.Write("CONNECTION open");
            }
            catch (Exception e)
            {
                Console.Write(e);

            }
            String query = $"select * from proj3_categorydata order by 'category_name' ;";
            try
            {
                SqlCommand command = new SqlCommand(query, connection);

                SqlDataReader reader = command.ExecuteReader();
                while (reader.Read())
                {
                    CategoryModel category = new CategoryModel();
                    category.id = reader.GetInt32(0);
                    category.category_name = reader.GetString(1);
                    category.hits = reader.GetInt32(2);
                    category.image_link = reader.GetString(3);

                    categoryList.Add(category);
                }
                reader.Close();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            connection.Close();
            return categoryList;
        }


    }
}
