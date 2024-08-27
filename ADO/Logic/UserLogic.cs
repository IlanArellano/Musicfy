using ADO.Logic.Base;
using Entities.Entities;

namespace ADO.Logic
{
    public class UserLogic: BaseLogic<User, Guid>
    {
        private readonly musicfyContext _dbContext;

        public UserLogic(musicfyContext dbContex) : base(dbContex)
        {
            _dbContext = dbContex;
        }

    }
}
