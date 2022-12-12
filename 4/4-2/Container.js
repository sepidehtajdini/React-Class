import googleLogo from "../img/google.png";
import amazonLogo from "../img/amazon.png";
import youtubeLogo from "../img/youtube.png";
import yahooLogo from "../img/yahoo.png";
import facebookLogo from "../img/facebook.jfif";
function Container({ google, youtube, amazon, facebook, yahoo }) {
    return (<div className="flex_container">
        <span className="sidebar">
            <table>
                <thead>
                    <tr>
                        <th> Here Are the </th>
                        <th>mentioned sites:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src={googleLogo} alt="google logo" /></td>
                        <td><a href={google}>GoOgle</a></td>
                    </tr>
                    <tr>
                        <td><img src={youtubeLogo} alt="youtube logo" /></td>
                        <td><a href={youtube}>YouTube</a></td>
                    </tr>
                    <tr>
                        <td><img src={amazonLogo} alt="amazon logo" /></td>
                        <td><a href={amazon}>Amazon</a></td>
                    </tr>
                    <tr>
                        <td><img src={facebookLogo} alt="facebook logo" /></td>
                        <td><a href={facebook}>Facebook</a></td>
                    </tr>
                    <tr>
                        <td><img src={yahooLogo} alt="yahoo logo" /></td>
                        <td><a href={yahoo}>YaHoo</a></td>
                    </tr>
                </tbody>
            </table>
        </span>
        <span className="content">
            <h3>Introducing the 20 most popular websites</h3>
            1. <span className="google">GoOgle </span>
            <span className="subcontent">There’s no doubt that <a href={google} className="google">GoOgle</a> is the most popular search engine, but
                this year it remains at the top spot
                as the most popular website on the internet. Over 40k searches are reported each second on Google —
                which translates to over 1.2 trillion searches per year! No matter what someone wants to know, Google is
                the go-to. Not only that, but Google also now serves as the hub for a plethora of other web services
                including Google Docs, Google Calendar, Google Drive and many more.
            </span>
            2. <span className="youtube">YouTube </span>
            <span className="subcontent">This website jumped up the list two spots this year as it’s impressive stats continue to climb. Almost 5
                billion videos are watched on <a href={youtube} className="youtube">YouTube</a> every single day.
                YouTube gets over 30 million visitors per day. Every minute, over 300 minutes of video is uploaded to
                YouTube. We expect to see <a href={youtube} className="youtube">YouTube</a> in the top three for a long time
                to come.</span>
            3. <span className="amazon">Amazon </span>
            <span className="subcontent">Down one spot from last year, <a href={amazon} className="amazon">Amazon</a> is still one of the top three
                most popular website on the internet
                and dominates the online shopping world.
                From <a href={amazon} className="amazon">Amazon.com</a> , site visitors can purchase their favorite books,
                clothing, home goods, groceries and
                more! And, if they sign up for the Prime membership, those purchases can be delivered to their front
                door within just a day or two — for free! With such a wide variety of goods and such amazing service,
                it’s no wonder Amazon is one of the leaders again this year.</span>
            4. <span className="facebook">Facebook </span>
            <span className="subcontent"><a href={facebook} className="facebook">Facebook</a> is the leading social media platform across the world.
                Its innovative design has changed the way
                people communicate and live their lives.
                Every month, the website boasts an impressive 2.37 billion users. 1.66 billion people on average log
                onto Facebook daily and are considered daily active users (Facebook DAU) as of January 2020, which
                represents a 9% increase year over year.</span>
            5. <span className="yahoo">YaHoo </span>
            <span className="subcontent">Still going strong is <a href={yahoo} className="yahoo">Yahoo.com</a>. Yahoo was the leading search engine
                and news source for a very long time
                and still can hold it’s own as one of the most popular websites online.
                The model has changed a bit however as it really has found more traction for news, articles, finance,
                etc. vs purely a search engine.</span>
        </span>
    </div>)
}
export default Container
