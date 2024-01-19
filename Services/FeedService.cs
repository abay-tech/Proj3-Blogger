using Blogger_C_.Models;
using DataAccessLayer;
using DataAccessLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Net.Mime.MediaTypeNames;

namespace Services
{
    public  class FeedService
    {
        private DataAccessLayer.FeedDAL _feedDAL;
        public FeedService() { 
            _feedDAL=new DataAccessLayer.FeedDAL();
        }
        public async Task<List<FeedModel>?> GetListAsync(int skipNum, int category_id)
        {
            var data=await _feedDAL.GetListDALAsync(skipNum, category_id);
            return data;
        }
        public async Task<List<FeedModel>?> GetFeedDataFavAsync(string feedIds)
        {
            var data = await _feedDAL.GetFeedDataFavDALAsync(feedIds);
       
            return data;
        }
        public async Task<List<FeedModel>?> GetTopFeedsAsync() 
        {
            var data = await _feedDAL.GetTopFeedsDALAsync();
            return data;
        }
        public async Task<bool?> PostFeedAsync(PostFeedModel postFeed)
        {
            ImageModel image = new();
            image.description = "image for feed";
            image.file_name = "file";
            image.image_data = postFeed.image_data;
            image.user_id = postFeed.author_id;
            image.upload_time = DateTime.Now;

            var isUpload = await _feedDAL.SendAsync(image);

            //tie image id together
            if (isUpload == true)
            {
                int? ID =await _feedDAL.ImageFinder(image.user_id, image.upload_time);
                if (ID != null)
                {
                    Console.WriteLine("Image upload success");
                    var data = await _feedDAL.PostFeedAsync(postFeed, ID);
                    return data;
                }
            }
            return null;
        }

    }
}
