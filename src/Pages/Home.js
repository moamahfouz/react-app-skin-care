import '../assets/styles.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';


function Home() {
    return (
        <>
            <Navbar/>
            <div className="container mg__top">
                <div className="row">
                    <div className="col-6">
                        <h1 className="text-primary">روتين مصمم خصيصاً<br/>
                            لـ
                            <span className="typed-text">جمالك</span>
                        </h1>
                        <p className="mg__top text-primary">
                            بسبب اختلاف نوع البشرة من شخص لآخر، دكاترة الجلدية بتنصح دايما بعدم استخدام منتجات بشرة بشكل
                            عشوائي
                            لمجرد انها فعالة على الآخرين. لذلك صممنا لك Quiz مجاني يحدد لك نسبة العناصر التي تحتاج اليها
                            بشرتك
                            للوصول الى النتائج المرغوب فيها بسهولة.
                        </p>

                        <div className="mg__top">
                            <Link to="/assessment" className="discover__btn rounded white__text bg-prime">
                                اكتشف روتينك المناسب
                            </Link>
                            <a href="#" className="rounded white__text bg-prime btn__play">
                                <img src="/images/play.svg" className="img-fluid" alt="Image!"/>
                            </a>
                        </div>
                        <p className="mg__top text-primary">
                            مجاني يستغرق دقيقتين فقط ليرشح لك الروتين الامثل لك.
                        </p>

                    </div>
                    <div className="col-6 hide__mobile"><img src="/images/cartoon.png" className="img-fluid"
                                                             alt="Image!"/>
                    </div>
                </div>

                <div className="mg__top">
                    <div id="img__middle">
                        <img src="/images/img_sponser.png" className="img-fluid"/>
                    </div>
                </div>


                <div className="row mg__top">
                    <div className="col-6">
                        <img src="/images/screen+time.png" className="img-fluid"
                             width="450"
                             alt=""/>
                    </div>

                    <div className="col-6 mg__top">
                        <h1 className="text-primary">نقوم بالعمل المجهد بدلا منك</h1>
                        <div className="my-5">
                            <img src="/images/mf-logo.svg" className="d-inline" width="30"/>
                            <span>هو برنامج مطور خصيصًا لمساعدتك في اختيار الروتين الأنسب لك بدقة واحترافية،وفي غضون دقيقتين فقط.</span>
                        </div>

                        <div className="mt-3">
                            <ol className="tasks">
                                <li>من بين مئات المنتجات نرشح لك المنتج المناسب لبشرتك</li>
                                <li>نحرص على أن يكون المنتج المرشح آمن تماماً على بشرتك</li>
                                <li>ضمان لمدة 30 يوم في حالة وجود أي مشاكل تتعلق بالمنتج</li>
                            </ol>
                        </div>
                        <div className="ml-5">
                            <a href="" className="bg-prime white__text rounded discover__btn">إبدا الآن</a>
                        </div>

                    </div>
                </div>

            </div>
            <Footer/>
        </>
    );
}

export default Home;
