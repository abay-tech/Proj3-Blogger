using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Models
{
    public class ImageModel
    {
        public int image_id { get; set; }
        public byte[] image_data { get; set; }
        public string file_name { get; set; }
        public string description { get; set; }
    }
}
