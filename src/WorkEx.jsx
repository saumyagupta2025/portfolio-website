export default function WorkEx() {
  return (
    <div>
      <div
        id="workex-container"
        className="workex-container bg-slate-900 pt-20 pb-12"
        style={{ zIndex: 100, position: "relative" }}
      >
        <h3 className="text-white text-center text-3xl font-bold my-6">
          Work Experience
        </h3>
        <div className="timeline mt-6">
          <div className="timeline-container">
            <div className="timeline-block timeline-block-right">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3 className="text-sky-500">Associate Data Engineer</h3>
                <span className="text-white">Shell, Bangalore</span>
                <p className="text-white mb-3">
                  <em>July 2023 - Present</em>
                </p>
                <p className="text-gray-400 text-justify">
                  Built complete end to end data pipelines using Azure SQL DB,
                  PySpark, Databricks, and PowerBI for dashboards. Used DBT, a
                  data transformation tool for ETL process to populating data
                  lake in the Medallion Architecture. Worked on building a
                  enterprise wide full stack blog website, giving users option
                  to publish and read blogs. Underwent 2 months training for
                  data engineering tools on Azure Cloud including SQL Data
                  Warehouse, Python, PySpark, Databricks and PowerBI.
                </p>
              </div>
            </div>

            <div className="timeline-block timeline-block-left">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3 className="text-sky-500">Data and AI Intern</h3>
                <span className="text-white">Cognitive Garage, Delhi</span>
                <p className="text-white mb-3">
                  <em>January 2023 - June 2023</em>
                </p>
                <p className="text-justify text-gray-400">
                  Analyzed transaction data of people to identify the credit
                  risk associated with it. Built an object detection model using
                  YOLOv7 for identification of the various articles with an
                  accuracy of 95% used for loan risk prediction. Worked on
                  building a RNN Model for prediction of the diseases based on
                  symptoms which are entered one by one after each iteration, to
                  assign a score and give the most accurate prediction for the
                  entered set of symptoms.
                </p>
              </div>
            </div>

            <div className="timeline-block timeline-block-right">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3 className="text-sky-500">Data Science Intern</h3>
                <span className="text-white">
                  Lets Grow More, eLearning Company
                </span>
                <p className="text-white mb-3">
                  <em>March 2022 - April 2022</em>
                </p>
                <p className="text-gray-400 text-justify">
                  Worked on Machine Learning and Deep Learning Projects like
                  Stock Market Prediction, Forecasting using Stacked LSTM &
                  Music Recommendation System using various python libraries and
                  tools like Numpy, Pandas, Matplotlib, Seaborn, Sklearn,
                  Tensorflow, etc. Also developed several projects that included
                  Neural Network to read handwriting, Handwritten Equation
                  solver using CNN and ML Face Recognition to detect mood and
                  suggest songs.
                </p>
              </div>
            </div>

            <div className="timeline-block timeline-block-left">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3 className="text-sky-500">
                  Machine Learning Application Developer
                </h3>
                <span className="text-white">
                  Technocolabs Softwares, Indore
                </span>
                <p className="text-white mb-3">
                  <em>Feb 2022 - March 2022</em>
                </p>
                <p className="text-justify text-gray-400">
                  Performed EDA on a H-1B visa dataset with about 3 million
                  entries, applied Random Forest Classifier to classify &
                  predict the outcome of the H-1B Visa Applications with an
                  accuracy of 85%. Created a web interface using HTML, CSS &
                  Flask for deployment of the model on the Heroku Cloud.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
