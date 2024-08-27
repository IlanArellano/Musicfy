
using System.ComponentModel.DataAnnotations;

namespace Entities.Base
{
     public class BaseEntity<IKeyType>: Register
{
        [Key]
        public IKeyType id { get; set; }  
}
}
