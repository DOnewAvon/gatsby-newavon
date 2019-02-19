import React from 'react'
import Layout from "../components/Layout"

const TwoColPage = () => <Layout>
    <div>
        <aside className="col-md-6" role="complementary">
            <p><img className="img-responsive" alt=" " src="http://via.placeholder.com/800x800"/></p>
        </aside>
        <main className="col-md-6" role="main">
            <h1>12 Columns - Inner 6x6</h1>
            <p style={{marginBottom: 400 + 'px'}}>Lorem ipsum dolor sit amet, erant dolor phaedrum ad vel, usu mundi consequuntur ne. In pri ceteros pericula argumentum, at eum veri congue consequat, no quot nibh mea. Natum aliquam pericula at vis, congue efficiendi cu mea. Tibique commune gubergren et usu, usu ne sadipscing voluptatibus comprehensam, te wisi tritani his. Ornatus comprehensam eu sed, sit nisl eruditi ocurreret. Lorem ipsum dolor sit amet, erant dolor phaedrum ad vel, usu mundi consequuntur ne. In pri ceteros pericula argumentum, at eum veri congue consequat, no quot nibh mea. Natum aliquam pericula at vis, congue efficiendi cu mea. Tibique commune gubergren et usu, usu ne sadipscing voluptatibus comprehensam, te wisi tritani his. Ornatus comprehensam eu sed, sit nisl eruditi ocurreret.</p>
        </main>
    </div>
</Layout>

export default TwoColPage