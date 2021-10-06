import "./Home.css";
import Button from "@material-ui/core/Button";
import main_intro from "../res/main_intro.png";
import firstImg from "../res/firstImg.jpg";
import secondImg from "../res/secondImg.jpg";
import thirdImg from "../res/thirdImg.jpg";
import fourthImg from "../res/fourthImg.jpg";
import wishList from "../res/wishList.jpg";
import note from "../res/note.jpg";
import { IonButton, IonPage } from "@ionic/react";
import { useEffect,useState } from "react";
function PhotoItem(Background: string) {
  return (
    <>
      <div
        className="photoItem"
        style={{ backgroundImage: `url(${Background})` }}
      ></div>
    </>
  );
}
function PhotoItemWithBorder(Background: any) {
  return (
    <>
      <div
        className="photoItems"
        style={{ backgroundImage: `url(${Background})`, marginBottom: "1%" }}
      ></div>
    </>
  );
}
const Home: React.FC = () => {
  const [scrollY, setScrollY]=useState(0);
  const listener =(e:any)=>{
    setScrollY(e.target.scrollTop)
  }
  
  return (
    <>
      <IonPage onScroll={listener}>
        <div className={"homeContainer"}>
          {/* <MenuBar/> */}
          <div className={"wrapper"} >
            <div className="container">
              <p>
                <strong>인 생 N 컷</strong>
              </p>
              <div className="meta">
                소중한 추억을 친구, 연인과 함께 쌓아보세요!
                <br /> #Photo #Album #Private
                <br />
                <br />
                {/* <Button
                style={{ fontFamily: "Yeon Sung", border: "1px solid black"}}
                // onClick={openPhotoAlbum}
              > */}
                <IonButton color="light" style={{ fontFamily: "Yeon Sung" }}>
                  지금 앨범만들기
                </IonButton>
                {/* </Button> */}
              </div>
              <div className={"ncutImg"}>
                <div className={"whitesection"}>
                  <div className="whiterect">{PhotoItem(firstImg)}</div>
                  <div className="whiterect">{PhotoItem(secondImg)}</div>
                  <div className="whiterect">{PhotoItem(thirdImg)}</div>
                  <div className="whiterect">{PhotoItem(fourthImg)}</div>
                </div>
              </div>
              <div
                className={"introducetext"}
                style={{
                  marginTop: "15px",
                }}
              >
                인생 N컷은 친구, 연인과 함께 <br /> 추억을 공유할 수 있는 <br />
                Private Album입니다.
                <br/><br/>
              </div>
              <div
                className={"introducetext"}
                style={
                  {
                    opacity: (scrollY - 700) / 250,
                  }
                }
              >
                '우리만의' 앨범에 <br />
                사진을 업로드 하고
              </div>
              <div
                className={"introducetext"}
                style={
                  {
                    opacity: (scrollY - 900) / 250,
                  }
                }
              >
                <br /> 소중한 사람들과 <br />
                추억을 공유할 수 있어요.
              </div>
              <div
                className={"introducetext"}
                style={
                  {
                    opacity: (scrollY - 1000) / 250,
                  }
                }
              >
                <br />
                <div className="wishcontainer">
                  {PhotoItemWithBorder(wishList)}
                </div>
                '우리가 가야할 곳'을 저장하고
                <br /> 버킷리스트를 작성할 수도 있죠.
                <br />
                <br />
              </div>
              <div
                className="introducetext"
                style={
                  {
                    opacity: (scrollY - 1400) / 250,
                  }
                }
              >
                <div className="wishcontainer">{PhotoItemWithBorder(note)}</div>
                디데이를 설정하고, 우리가 함께한 <br />
                시간도 기억할 수 있어요.
                <br />
              </div>
              <div
                className="introducetext"
                style={
                  {
                    opacity: (scrollY - 1600) / 250,
                  }
                }
              >
                <br />
                소중한 '지금'
                <br /> 같이 기억하는 건 어때요?
                <br />
                <IonButton
                  color="light"
                  style={{
                    fontFamily: "Yeon Sung",
                    marginTop: "2%",
                  }}
                >
                  지금 앨범만들기
                </IonButton>
                {/* <Button
                  style={{
                    fontFamily: "Yeon Sung",
                    border: "1px solid black",
                    marginTop: "2%",
                  }}
                  // onClick={openPhotoAlbum}
                >
                  지금 앨범만들기
                </Button> */}
              </div>
            </div>
          </div>
          <div className={"bottomDiv"}>
            <div className={"metabottom"}>
              개발자 : 이재빈
              <br />
              MAIL : woqls226@gmail.com
              <br />
              GITHUB : https://github.com/woqls22
            </div>
          </div>
        </div>
      </IonPage>
    </>
  );
};

export default Home;
