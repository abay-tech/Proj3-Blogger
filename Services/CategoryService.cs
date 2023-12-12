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

        public async Task<List<CategoryModel>?> GetTopAsync()
        {         
                var data =await _categoryDAL.GetTopDALAsync();
                if (data != null){
                    return data;
                }
            return null;
        }
        public async Task<List<CategoryModel>?>? GetAllAsync()
        {
                var data =await _categoryDAL.GetAllDALAsync();
                if (data != null)
                {
                    return data;
                }
           return null;
        }
    }
}
