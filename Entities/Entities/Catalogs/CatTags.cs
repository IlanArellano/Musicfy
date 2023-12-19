using Entities.Base;
using Entities.Base.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Entities.Catalogs
{
    public class CatTags : BaseEntity<int>, IName
    {
        public string name { get; set; }
    }
}
