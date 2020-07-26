<template>
  <div class="container" id="learn-more">
    <h1 class="title">Learn More</h1>
    <br>
    <hr>
    <p class="subtext">
      I strongly recommend recommend to read this article
      <a href="https://medium.com/coinmonks/iota-mam-eloquently-explained-d7505863b413">"IOTA: MAM Eloquently Explained"</a>.</p>
      <p>
        He really breaks down the tech but most important of all, he goes into all features which is something
        very hard to visualize in the simulator.
    </p>

    <br>
    <h3 class="subtitle">The Tangle does not store your data</h3>
    <br>
    <p>
      The Tangle is not a persistent way of data storage. It keeps the data until the next
      <a href="https://www.iota-wiki.com/de/#Was_ist_ein_Snapshot">Snapshot</a> where it gets
      pruned on the node. One could bypass this by using <a href="https://docs.iota.org/docs/chronicle/1.0/overview">Chronicle</a>
      or just drop the idea of a network as a storage device. The owner is verifiable using the signature every messages of
      his channel. These messages also contain timestamp and sequence number. Therefore we just need to fetch the
      MAM messages from the Tangle and evaluate the payload in sequence order and save it afterwards to a database or your own solution.
      This means already via using the Streams/MAM protocol data integrity and authenticity are given.
    </p>
    <br>
    <h3 class="subtitle">Choose who can see what [TODO]</h3>
    <br>
    <p>basic way mam/streams work. random and secure. one way linking.
      different modes.

    </p>

    <br>
    <h3 class="subtitle">Push the limits [TODO]</h3>
    <br>
    <p> Using message headers, it allows one to kind of tag the message and make it routable after reception.
      This means in the same channel the data is send, also the business logic can flow. Coupled with a header
      based encryption method.

      This is of course unidirectional, but it can be extended by using a either an standardized*link* or some
      custom communication protocol. In theory the limitations would be a fully connected network with no theoretical
      limitations. Everyone can follow every channel of which he knows the root and the side key if necessary.
    </p>

    <br>
    <h3 class="subtitle">Close the circle</h3>
    <br>
    <p> As with most established DLTs you can utilize listeners to implement push messages.
      This makes sense when aggregating data which can then be used for monitoring and even alarm you about escalation
      processes or quality metrics. e.g. with Prometheus + Grafana and Alert Notifications.
      Break your data silos!
    </p>

    <br>
    <h3 class="subtitle">My view on it [TODO]</h3>
    <br>
    <p>It implements in a communication way more features than e.g. Hyperledger Fabric. But it is much more distributed,
      and still a lean base layer. Everyone who worked with Fabric knows what I mean by that.
      It allows frictionless secure communication framework which additionally provides strong features to build on top.
      Transparency is key and therefor it is crucial to go permissionless.
    </p>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
  a {
    color: lightgoldenrodyellow;
    font-size: 12pt;
    vertical-align: baseline;
    text-decoration: underline;
  }

  a:hover {
    color:yellow;
  }

  #learn-more {
    width: 100%;
    height:120vh;
    background: #345695;
    background-image: linear-gradient(#345695, #274371);
    padding: 40px;
  }

  .title {
    color:white;
  }

  p {
    color: white;
    margin: 0;
  }

  .subtitle {
    color: white;
    margin-top: 1em;
  }

  hr { display: block; height: 1px;
    border: 0; border-top: 1px solid #ccc;
    margin: 1em 0; padding: 0; }


</style>

