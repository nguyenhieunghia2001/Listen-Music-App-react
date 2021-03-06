import React from "react";
import { Table, Container} from "reactstrap";
import SingItem from "../../components/Sing/SingItem";
import './profile.scss'
import AvatarImg from '../../images/avatar.jpg'
import { useSelector } from "react-redux";

function Profile()   {
  const songLikeList = useSelector((state) => state.favorite.songs);
  return (
    // <Layout>
      <Container>
        <div className="profile">
          <div className="profile__info">
            <img src={AvatarImg} alt="avatar" />
            <h4>NghĩaDX</h4>
          </div>
          <div className="profile__menu">
            <ul>
              <li >
                <div>TỔNG QUAN</div>
              </li>
              <li className="profile__menu-active">
                <div>BÀI HÁT</div>
              </li>
              <li>
                <div>PLAYLIST</div>
              </li>
              <li>
                <div>NGHỆ SĨ</div>
              </li>
              <li>
                <div>ALBUM</div>
              </li>
              <li>
                <div>MV</div>
              </li>
              <li>
                <div>TẢI LÊN</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="sings">
          <div className="likeList">
            <Table>
              <thead>
                <tr>
                  <th>Bài hát yêu thích</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <SingItem sings={songLikeList} />
            </Table>
          </div>
        </div>
      </Container>
    // </Layout>
  );
}
export default Profile
