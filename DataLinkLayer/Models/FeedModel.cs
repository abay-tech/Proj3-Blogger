namespace Blogger_C_.Models
{
    public class FeedModel
    {
        public int id { get; set; }
        public string? title { get; set; }
        public int author_id{ get; set; }
        public string? content { get; set; }     
        public int category_id { get; set; }
        public string? author_name{ get; set; }
        public string? category_name { get; set;}
        public string? image_link { get; set; }
        public int image_id { get; set; }
        public byte[]? image_data { get; set;}

    }
}
