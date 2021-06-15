import React from 'react';
import style from './Users.module.css';
import userPhoto from '../../assets/images/user.png';


const Users = (props) => {


  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }


  return <div>

      <div className={style.numberPages}>
        {pages.map( (page, index) => {
          return <span className={props.currentPage === page ? style.selected : ''} 
                       key = {index}
                       onClick={(e) => {props.onPageChanged(page)}} >{page}</span>
        })}
      </div>

      {
        props.users.map( (user, index) => <div key = {index} className={style.user}>
          <div className={style.userAvatar}>
            <img className={style.photo}
                 src={user.photos.large !== null ? user.photos.large : userPhoto}
                 alt="Avatar" />

            {user.followed
              ? <button onClick={() => props.unfollow(user.id)}>Unfollow</button>
              : <button onClick={() => props.follow(user.id)}>Follow</button>}
          </div>

          <div className={style.userInfo}>
            <div className={style.name}>
              <strong>{user.name}</strong>
              <div className={style.status}>{user.status}</div>
            </div>

            <div>
              <div className={style.location}>
                {/* <span >{user.location.country}</span>
              <span >{user.location.sity}</span> */}
              </div>
            </div>
          </div>

        </div>
        )
      }
    </div>
}

export default Users;