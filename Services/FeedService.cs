using Blogger_C_.Models;
using DataAccessLayer;
using DataAccessLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
        public async Task<ImageModel?> RecieveAsync(int id)
        {
            var data = await _feedDAL.RecieveAsync(id);
            return data;
        }
        public async Task<bool?> SendAsync(ImageModel image)
        {
            var data = await _feedDAL.SendAsync(image);
            return data;
        }
    }
}
