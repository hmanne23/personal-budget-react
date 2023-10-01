import React from 'react';

function HomePage() {
  return (
    <div className="container center">

        <div className="page-area">

            <div className="text-box">
                <h1>Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
                <aside>
                    <h2>Tips:</h2>
                    <ul>
                        <li>Keep receipts for all purchases.</li>
                        <li>Create a monthly budget plan.</li>
                        <li>Review your expenses regularly.</li>
                    </ul>
                </aside>
            </div>
    
            <div className="text-box">
                <h1>Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. <mark className="mark">The goal is to never go over the budget</mark>
                </p>
            </div>
    
            <div className="text-box">
                <h1>Results</h1>
                <p>
                    People who stick to a <mark className="mark">financial plan, budgeting every expense</mark>, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </div>
    
            <div className="text-box">
                <h1>Free</h1>
                <p>
                    This app is free!!! And you are the only one holding your data!
                </p>
            </div>


            <article className="All">
            <div className="text">
                <h1>Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </div>
     
    
            <div className="text">
                <h1>Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </div>
    
            <div className="text">
                <h1>Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </div>
    
            <div className="text">
                <h1>Charts</h1>
                <p>
                    <canvas id="Chart" width="50" height="50"></canvas>
                </p>
            </div>
        </article>
        </div>

    </div>
  );
}

export default HomePage;
