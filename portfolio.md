---
layout: splash
title: "Portfolio"
permalink: /portfolio/
classes: wide
header:
  overlay_color: "#000"
  overlay_filter: "0.55"
  overlay_image: /pic/cenote_beam.png
  caption: "Diving deep into innovation"
---

<section class="page-section aurora">
  <div class="container">
    <div class="section-header" data-aos="fade-up">
      <span class="section-eyebrow">Selected Work</span>
      <h1 class="section-title">Projects &amp; Impact</h1>
      <p class="lead">A collection of projects where cutting-edge AI meets real-world impact — from language models that read the game to pipelines that move billions of tokens.</p>
    </div>

    <div class="stats-row">
      <div class="stat-block" data-aos="zoom-in">
        <div class="stat-value" data-count="600" data-suffix="B+">0</div>
        <div class="stat-caption">Tokens Processed</div>
      </div>
      <div class="stat-block" data-aos="zoom-in" data-aos-delay="100">
        <div class="stat-value" data-count="37.6" data-suffix="%">0</div>
        <div class="stat-caption">Accuracy Gain</div>
      </div>
      <div class="stat-block" data-aos="zoom-in" data-aos-delay="200">
        <div class="stat-value" data-count="90" data-suffix="%">0</div>
        <div class="stat-caption">Fewer Parameters</div>
      </div>
      <div class="stat-block" data-aos="zoom-in" data-aos-delay="300">
        <div class="stat-value" data-count="5" data-suffix="x">0</div>
        <div class="stat-caption">Faster Inference</div>
      </div>
    </div>
  </div>
</section>

<section class="page-section alt">
  <div class="container">
    <div class="section-header" data-aos="fade-up">
      <span class="section-eyebrow">On the Globe</span>
      <h2 class="section-title">Career Journey</h2>
      <p class="lead">Where I've studied, worked, and shared research — plotted on an interactive 3D globe. Drag to spin it and click a marker to explore each stop.</p>
    </div>

    <div class="map-wrap" data-aos="fade-up" data-aos-delay="100">
      <div id="work-map"></div>
    </div>

    <div class="map-legend" data-aos="fade-up">
      <span class="legend-item"><span class="legend-dot edu"></span> Education</span>
      <span class="legend-item"><span class="legend-dot work"></span> Experience</span>
      <span class="legend-item"><span class="legend-dot research"></span> Research</span>
    </div>
  </div>
</section>

<section class="page-section aurora">
  <div class="container">
    <div class="section-header" data-aos="fade-up">
      <span class="section-eyebrow">Featured</span>
      <h2 class="section-title">Flagship Projects</h2>
    </div>

    <div class="card-grid">
      <div class="glass-card accent-blue" data-aos="fade-up">
        <span class="tag-badge">Featured Project</span>
        <h3>OnlySportsLM</h3>
        <p>A 196M-parameter, sports-specialized language model achieving a 37.6% accuracy improvement over prior baselines — published at the NeurIPS 2024 ENLSP Workshop.</p>
        <a href="/portfolio/onlysportslm/" class="pill-link"><i class="fas fa-rocket"></i> Explore Project</a>
      </div>

      <div class="glass-card accent-purple" data-aos="fade-up" data-aos-delay="100">
        <span class="tag-badge">Data Engineering</span>
        <h3>Billion-Token Pipeline</h3>
        <p>End-to-end data engineering processing 600B+ tokens of sports content with Azure Synapse, Hadoop, and custom filtering algorithms for high-quality training data.</p>
        <a href="https://github.com/chrischenhub/OnlySportsLM" target="_blank" rel="noopener" class="pill-link"><i class="fas fa-database"></i> View Code</a>
      </div>

      <div class="glass-card accent-green" data-aos="fade-up" data-aos-delay="200">
        <span class="tag-badge">Real-time Analytics</span>
        <h3>Sports Analytics Engine</h3>
        <p>Live game analysis providing tactical insights, win-probability estimates, and player-performance metrics powered by efficient ML models.</p>
        <a href="/portfolio/" class="pill-link ghost"><i class="fas fa-chart-line"></i> Coming Soon</a>
      </div>
    </div>
  </div>
</section>

<section class="page-section alt">
  <div class="container">
    <div class="section-header" data-aos="fade-up">
      <span class="section-eyebrow">More</span>
      <h2 class="section-title">Additional Work</h2>
    </div>

    <div class="card-grid">
      <div class="glass-card accent-amber" data-aos="fade-up">
        <div class="card-icon"><i class="fas fa-microchip"></i></div>
        <span class="tag-badge">Optimization</span>
        <h3>Neural Architecture Design</h3>
        <p>A custom RWKV-v6 "deep-and-thin" architecture reaching up to 5x faster inference while preserving accuracy.</p>
      </div>

      <div class="glass-card accent-purple" data-aos="fade-up" data-aos-delay="100">
        <div class="card-icon"><i class="fas fa-chart-pie"></i></div>
        <span class="tag-badge">Visualization</span>
        <h3>Advanced Dashboards</h3>
        <p>Interactive analytics built with Power BI, Tableau, and D3.js for complex sports statistics and model-performance metrics.</p>
      </div>

      <div class="glass-card accent-green" data-aos="fade-up" data-aos-delay="200">
        <div class="card-icon"><i class="fas fa-flask"></i></div>
        <span class="tag-badge">Research</span>
        <h3>Research &amp; Publications</h3>
        <p>Contributions to ML conferences and open-source projects on efficient AI and sports analytics.</p>
        <a href="https://neurips2024-enlsp.github.io/papers/paper_21.pdf" target="_blank" rel="noopener" class="pill-link" style="margin-top:1rem;"><i class="fas fa-file-pdf"></i> Read Paper</a>
      </div>
    </div>
  </div>
</section>

<section class="page-section aurora">
  <div class="container">
    <div class="banner-cta" data-aos="zoom-in">
      <h2>Want to Collaborate?</h2>
      <p>I'm always excited to work on projects that push the boundaries of AI and data science.</p>
      <a href="/contact" class="btn-solid"><i class="fas fa-rocket"></i> Let's Build Something Amazing</a>
    </div>
  </div>
</section>

<script>
window.CAREER_LOCATIONS = [
{% for loc in site.data.locations %}
  {
    "title": {{ loc.title | jsonify }},
    "place": {{ loc.place | jsonify }},
    "when": {{ loc.when | jsonify }},
    "category": {{ loc.category | jsonify }},
    "lat": {{ loc.lat }},
    "lng": {{ loc.lng }},
    "description": {{ loc.description | jsonify }}
  }{% unless forloop.last %},{% endunless %}
{% endfor %}
];
</script>
