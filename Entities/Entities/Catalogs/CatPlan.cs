using Entities.Base;
using Entities.Base.Interfaces;
namespace Entities.Entities.Catalogs
{
    public class CatPlan : BaseEntity<int>, IName
    {
        public string name { get; set; }
        public decimal price { get; set; }
        public decimal discount { get; set; }
    }
}
