using Blogger_C_.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services
{
    public class CategoryService
    {
        private DataAccessLayer.CategoryDAL _categoryDAL;
        public CategoryService() {
            _categoryDAL=new DataAccessLayer.CategoryDAL();
        }

        public List<CategoryModel>? GetTop()
        {         
                var data = _categoryDAL.GetTopDAL();
                if (data != null){
                    return data;
                }
            return null;
        }
        public List<CategoryModel>? GetAll()
        {
                var data = _categoryDAL.GetAllDAL();
                if (data != null)
                {
                    return data;
                }
           return null;
        }
    }
}
