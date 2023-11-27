import BlogTile from "../components/blogs/BlogTile";
import "./../styles/blogs.css";

export default function Blogs() {
  const blogsInfo = [
    {
      imgSrc:
        "https://appinventiv.com/wp-content/uploads/sites/1/2018/05/API-Development-Guide.png",
      title: "Understanding the Fundamentals of RESTful API Architecture",
      desc: "Get an in-depth look at the key concepts and principles of RESTful API design.",
      link: "https://saumyagupta.hashnode.dev/understanding-the-fundamentals-of-restful-api-architecture",
    },
    {
      imgSrc:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1688382604996/8a5362f1-77f3-41ea-89d3-97fbaa5ca5d8.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
      title: "Dive into the Depths: Exploring the Power of Datalakes",
      desc: "Dive into the Depths: Exploring the Power of Datalakes",
      link: "https://saumyagupta.hashnode.dev/dive-into-the-depths-exploring-the-power-of-datalakes",
    },
    {
      imgSrc:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1688960322960/927d463f-5982-4a01-a652-1ab65e4b78aa.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
      title: "Everything About Data Warehouses That You Need To Know",
      desc: "Unlocking the Power of Data Warehouses: Your Guide to Centralized Data Insights",
      link: "https://saumyagupta.hashnode.dev/everything-about-data-warehouses-that-you-need-to-know",
    },
    {
      imgSrc:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1685339103017/02f691e3-fb35-4dca-8eb5-55ade7c76ff8.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
      title: "OLAP vs. OLTP - Which One's Your Data's Ally?",
      desc: "Unveiling the Significance of OLTP and OLAP in Modern Business Environments",
      link: "https://saumyagupta.hashnode.dev/olap-vs-oltp-which-ones-your-datas-ally",
    },
    {
      imgSrc:
        "https://www.datrick.com/wp-content/uploads/2023/04/datrick_An_image_with_purple_blue_and_dark_blue_colours_of_a_da_8ce39b1b-9f8b-4e39-aa2c-d44e253a15ad.png",
      title:
        "The Ultimate Guide to Selecting the Best Storage and Data Management Tool for Your Needs",
      desc: "Making an Informed Decision: Choosing the Right Database for Your Needs",
      link: "https://saumyagupta.hashnode.dev/the-ultimate-guide-to-selecting-the-best-storage-and-data-management-tool-for-your-needs",
    },
    {
      imgSrc:
        "https://static.vecteezy.com/system/resources/previews/002/212/589/non_2x/machine-learning-technology-free-vector.jpg",
      title:
        "Tackling Imbalanced Data in Machine Learning: Techniques for Accurate Predictions",
      desc: "Exploring Undersampling, Oversampling, and Hybrid Approaches for Handling Imbalanced Data",
      link: "https://saumyagupta.hashnode.dev/tackling-imbalanced-data-in-machine-learning-techniques-for-accurate-predictions",
    },
  ];

  return (
    <div className="blog-section-container">
      <div className="blog-header">
        <h1 className="blog-heading">Tech Narratives from My Perspective</h1>
        <p className="blog-subtitle">
          <em>Insights, Discoveries, and Lessons Along the Way.</em>
        </p>
      </div>
      <div className="all-blogs-container">
        {blogsInfo.map((currentInfo, index) => {
          return (
            <BlogTile
              key={index}
              imgSrc={currentInfo.imgSrc}
              title={currentInfo.title}
              desc={currentInfo.desc}
              link={currentInfo.link}
            />
          );
        })}
      </div>

      <a className="blog-website-link" href="https://saumyagupta.hashnode.dev/">
        Read More &rarr;
      </a>
    </div>
  );
}
