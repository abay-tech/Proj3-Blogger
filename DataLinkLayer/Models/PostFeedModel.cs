using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Models
{
    public class PostFeedModel
    {
        public int author_id { get; set; }
        public string? title { get; set; }
        public string? content{ get; set; }
        public int category_id{ get; set; }
        public byte[]? image_data { get; set; }
    }
}
