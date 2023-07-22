import "./singlepost.css";

export default function SinglePost() {
    return (

        <div className="singlePost">

            <div className="singlePostWrapper">
                <img src="/images/jst.jpg" alt="" className="singlePostImg" />

            </div>

            <h1 className="singlePostTitle">kmckasdmc
                <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span>
                    Author:
                    <b className="singlePostAuthor">
                    </b>
                </span>
                <span>1 day ago</span>
            </div>

            <p className="singlePostDesc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti odit adipisci, delectus amet, eligendi labore cumque saepe eos maxime dignissimos tenetur nulla atque impedit vero architecto incidunt repudiandae dolorum similique?
            </p>





        </div>





    );
}