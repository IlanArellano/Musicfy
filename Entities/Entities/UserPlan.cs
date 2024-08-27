

using Entities.Base;

namespace Entities.Entities
{
    public class UserPlan : Register
    {
        public Guid userId { get; set; }
        public int catPlanId { get; set; }
        public DateTime startDate { get; set; }
        public DateTime endDate { get; set; }
        public bool? parent { get; set; }
    }
}
