using Blogger_C_.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Server.IIS.Core;
using System.Data.SqlClient;
using System.Diagnostics.Eventing.Reader;

namespace Blogger_C_.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FeedController : ControllerBase
    {
        [HttpGet("feedlist")]
        public List<FeedModel> GetList(int skipNum,int category_id)
        {
            Console.Write("<-"+skipNum+"->");
            List<FeedModel> feedList = new List<FeedModel>();

            string connectionString = @"Data Source=DESKTOP-H9T9SKL;Initial Catalog=tester; User ID=sa;Password=RPSsql12345;TrustServerCertificate=True;";
            SqlConnection connection = new SqlConnection(connectionString);
            try
            {
                connection.Open();
            }
            catch (Exception e)
            {
                Console.Write(e);

            }
            String query = "";
            if (category_id != 0)
            {
query = $"select proj3_feed.id,proj3_feed.title,proj3_feed.author_id,proj3_feed.content,proj3_feed.category_id,proj3_feed.image_link,proj3_userdata.username,proj3_categorydata.category_name " +
                $"from proj3_feed " +
                $"inner join proj3_userdata on proj3_feed.author_id=proj3_userdata.id " +
                $"inner join proj3_categorydata on proj3_feed.category_id=proj3_categorydata.id " +
                $" where proj3_feed.category_id=@CATEGORY_ID "+
                $"order by id offset @SKIPNUM rows fetch next 5 rows only ";
            }
            else
            {
                query = $"select proj3_feed.id,proj3_feed.title,proj3_feed.author_id,proj3_feed.content,proj3_feed.category_id,proj3_feed.image_link,proj3_userdata.username,proj3_categorydata.category_name " +
                $"from proj3_feed " +
                $"inner join proj3_userdata on proj3_feed.author_id=proj3_userdata.id " +
                $"inner join proj3_categorydata on proj3_feed.category_id=proj3_categorydata.id " +
                $"order by id offset @SKIPNUM rows fetch next 5 rows only ";
            }

            try
            {  
                SqlCommand command = new SqlCommand(query, connection);
                command.Parameters.AddWithValue("@SKIPNUM", skipNum);
                command.Parameters.AddWithValue("@CATEGORY_ID", category_id);


                SqlDataReader reader = command.ExecuteReader();
                while (reader.Read())
                {
                    FeedModel feed = new FeedModel();
                    feed.id = reader.GetInt32(0);
                    feed.title = reader.GetString(1);
                    feed.author_id = reader.GetInt32(2);
                    feed.content= reader.GetString(3);
                    feed.category_id = reader.GetInt32(4);
                    feed.image_link = reader.GetString(5);
                    feed.author_name = reader.GetString(6);
                    feed.category_name = reader.GetString(7);

                    feedList.Add(feed);
                }
                reader.Close();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return null;
            }
            connection.Close();
            
            return feedList;
        }

        [HttpGet("feedData")]
        public List<FeedModel> GetFeedData(string feedIds)
        {
            List<FeedModel> feedList = new List<FeedModel>();


            string connectionString = @"Data Source=DESKTOP-H9T9SKL;Initial Catalog=tester; User ID=sa;Password=RPSsql12345;TrustServerCertificate=True;";
            SqlConnection connection = new SqlConnection(connectionString);
            try
            {
                connection.Open();
            }
            catch (Exception e)
            {
                Console.Write(e);
            }
            String query = $"select proj3_feed.id,proj3_feed.title,proj3_feed.author_id,proj3_feed.content,proj3_feed.category_id,proj3_feed.image_link,proj3_userdata.username,proj3_categorydata.category_name " +
                $"from proj3_feed " +
                $"inner join proj3_userdata on proj3_feed.author_id=proj3_userdata.id " +
                $"inner join proj3_categorydata on proj3_feed.category_id=proj3_categorydata.id " +
                $"where proj3_feed.id in (";

                query += feedIds + ")";

            try
            {
               

                SqlCommand command = new SqlCommand(query, connection);

                SqlDataReader reader = command.ExecuteReader();
                if (reader.HasRows)
                    while (reader.Read())
                {
                        FeedModel feed = new FeedModel();

                        feed.id = reader.GetInt32(0);
                        feed.title = reader.GetString(1);
                        feed.author_id = reader.GetInt32(2);
                        feed.content= reader.GetString(3);
                        feed.category_id = reader.GetInt32(4);
                        feed.image_link = reader.GetString(5);
                        feed.author_name = reader.GetString(6);
                        feed.category_name = reader.GetString(7);

                        feedList.Add(feed);

                    }
                else
                {
                    return null;
                }
                reader.Close();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return null;

            }
            connection.Close();
            return feedList;

        }

        [HttpGet("topfeed")]
        public List<FeedModel> GetTopFeeds()
        {
            List<FeedModel> feedList = new List<FeedModel>();

            string connectionString = @"Data Source=DESKTOP-H9T9SKL;Initial Catalog=tester; User ID=sa;Password=RPSsql12345;TrustServerCertificate=True;";
            SqlConnection connection = new SqlConnection(connectionString);
            try
            {
                connection.Open();
            }
            catch (Exception e)
            {
                Console.Write(e);

            }
            String query = $"select proj3_feed.id,proj3_feed.title,proj3_feed.author_id,proj3_feed.content,proj3_feed.category_id,proj3_feed.image_link,proj3_userdata.username,proj3_categorydata.category_name " +
                $"from proj3_feed " +
                $"inner join proj3_userdata on proj3_feed.author_id=proj3_userdata.id " +
                $"inner join proj3_categorydata on proj3_feed.category_id=proj3_categorydata.id " +
                $"order by proj3_feed.hits desc offset 0 rows fetch next 6 rows only";

            try
            {
                SqlCommand command = new SqlCommand(query, connection);

                SqlDataReader reader = command.ExecuteReader();
                while (reader.Read())
                {
                    FeedModel feed = new FeedModel();
                    feed.id = reader.GetInt32(0);
                    feed.title = reader.GetString(1);
                    feed.author_id = reader.GetInt32(2);
                    feed.content = reader.GetString(3);
                    feed.category_id = reader.GetInt32(4);
                    feed.image_link = reader.GetString(5);
                    feed.author_name = reader.GetString(6);
                    feed.category_name = reader.GetString(7);

                    feedList.Add(feed);
                }
                reader.Close();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return null;
            }
            connection.Close();
            return feedList;
        }
    }
}
