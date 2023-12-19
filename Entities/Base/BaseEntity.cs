using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Base
{
     public class BaseEntity<IKeyType>
{
        public IKeyType id { get; set; }
        public DateTime created_at { get; set; }    
        public DateTime updated_at { get; set; }   
}
}
