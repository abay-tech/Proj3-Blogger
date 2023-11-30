using Blogger_C_.Models;
using DataAccessLayer;
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
        public List<FeedModel>? GetList(int skipNum, int category_id)
        {
            return _feedDAL.GetListDAL(skipNum, category_id);
        }
        public List<FeedModel> GetFeedDataFav(string feedIds)
        {
            return _feedDAL.GetFeedDataFavDAL(feedIds);
        }
        public List<FeedModel> GetTopFeeds() 
        {
            return _feedDAL.GetTopFeedsDAL();
        }
    }
}
