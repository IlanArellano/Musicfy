using Entities.Entities;
using Logic.Base;

namespace Logic
{
    public class UserLogic : BaseLogic<User, Guid>
    {
        private readonly musicfyContext _dbContext;
        public override void Add(User entity)
        {
            throw new NotImplementedException();
        }

        public override void Delete(Guid id)
        {
            throw new NotImplementedException();
        }

        public override ICollection<User> GetAll()
        {
            throw new NotImplementedException();
        }

        public override User GetById(Guid id)
        {
            throw new NotImplementedException();
        }

        public override void Modify(User entity)
        {
            throw new NotImplementedException();
        }
    }
}