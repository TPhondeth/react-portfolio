import React from 'react';
import BudgetTracker from '../../assets/images/budget-tracker.png';
import FoodieLove from '../../assets/images/foodie-love.png';
import NoteTaker from '../../assets/images/note-taker.png';
import OhSnap from '../../assets/images/oh-snap.png';
import Moolah from '../../assets/images/moolah.png';
import Taskinator from '../../assets/images/taskinator.png';

function Portfolio() {
    return (
        <section className="portfolio">

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4 portfolio">
            <div class="col">
                <div class="card">
                    <img
                        src={BudgetTracker}
                        alt="budgetTracker"
                        class="card-img-top"
                    />
                    <div class="card-body">
                        <p className="center">Budget Tracker</p>
                        <a href="https://github.com/TPhondeth/challenge-week19" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">GitHub</button>
                        </a>
                        <a href="https://pure-dusk-48925.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">Website</button>
                        </a>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card">
                    <img
                        src={FoodieLove}
                        alt="foodieLove"
                        class="card-img-top"
                    />
                    <div class="card-body">
                        <p className="center">Foodie Love</p>
                        <a href="https://github.com/jasongrossman/team-2" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">GitHub</button>
                        </a>
                        <a href="https://jasongrossman.github.io/team-2/" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">Website</button>
                        </a>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card">
                    <img
                        src={NoteTaker}
                        alt="noteTaker"
                        class="card-img-top"
                    />
                    <div class="card-body">
                        <p className="center">Note Taker</p>
                        <a href="https://github.com/TPhondeth/challenge-week11" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">GitHub</button>
                        </a>
                        <a href="https://challenge-week11.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">Website</button>
                        </a>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card">
                    <img
                        src={OhSnap}
                        alt="ohSnap"
                        class="card-img-top"
                    />
                    <div class="card-body">
                        <p className="center">Oh Snap!</p>
                        <a href="https://github.com/TPhondeth/photo-port" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">GitHub</button>
                        </a>
                        <a href="https://tphondeth.github.io/photo-port/" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">Website</button>
                        </a>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card">
                    <img
                        src={Moolah}
                        alt="moolah"
                        class="card-img-top"
                    />
                    <div class="card-body">
                        <p className="center">Moolah</p>
                        <a href="https://github.com/TPhondeth/Moolah" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">GitHub</button>
                        </a>
                        <a href="https://moolahwallet.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">Website</button>
                        </a>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card">
                    <img
                        src={Taskinator}
                        alt="taskinator"
                        class="card-img-top"
                    />
                    <div class="card-body">
                        <p className="center">Taskinator</p>
                        <a href="https://github.com/TPhondeth/taskinator" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">GitHub</button>
                        </a>
                        <a href="https://tphondeth.github.io/taskinator/" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">Website</button>
                        </a>
                    </div>
                </div>
            </div>



        </div>
    </section>
    )
}

export default Portfolio;