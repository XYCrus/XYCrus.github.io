---
layout: splash
title: "Technical Blog"
permalink: /blog/
classes: wide
header:
  overlay_color: "#000"
  overlay_filter: "0.55"
  overlay_image: /pic/fish_school.jpg
  caption: "Swimming through the ocean of data"
---

<section class="page-section aurora">
  <div class="container">
    <div class="section-header" data-aos="fade-up">
      <span class="section-eyebrow">Field Notes</span>
      <h1 class="section-title">Technical Blog</h1>
      <p class="lead">Insights, discoveries, and lessons from the frontlines of AI and data science — from model-architecture deep dives to practical ML engineering.</p>
    </div>
  </div>
</section>

<section class="page-section alt">
  <div class="container">
    <div class="section-header" data-aos="fade-up">
      <span class="section-eyebrow">Topics</span>
      <h2 class="section-title">What You'll Find Here</h2>
    </div>

    <div class="card-grid">
      <div class="glass-card accent-blue" data-aos="fade-up">
        <div class="card-icon"><i class="fas fa-brain"></i></div>
        <h3>AI &amp; ML Deep Dives</h3>
        <p>Technical explorations of cutting-edge algorithms, model architectures, and optimization techniques.</p>
      </div>
      <div class="glass-card accent-purple" data-aos="fade-up" data-aos-delay="100">
        <div class="card-icon"><i class="fas fa-code"></i></div>
        <h3>Engineering Insights</h3>
        <p>Practical tips for building robust ML systems, optimizing performance, and scaling solutions.</p>
      </div>
      <div class="glass-card accent-green" data-aos="fade-up" data-aos-delay="200">
        <div class="card-icon"><i class="fas fa-chart-line"></i></div>
        <h3>Data Science Stories</h3>
        <p>Real-world case studies, lessons learned, and innovative approaches to complex data challenges.</p>
      </div>
      <div class="glass-card accent-amber" data-aos="fade-up" data-aos-delay="300">
        <div class="card-icon"><i class="fas fa-lightbulb"></i></div>
        <h3>Innovation Spotlights</h3>
        <p>Emerging trends, breakthrough research, and the future of artificial intelligence.</p>
      </div>
    </div>
  </div>
</section>

{% if site.posts.size > 0 %}
<section class="page-section aurora">
  <div class="container">
    <div class="section-header" data-aos="fade-up">
      <span class="section-eyebrow">Latest</span>
      <h2 class="section-title">Recent Posts</h2>
    </div>

    <div class="card-grid">
      {% for post in site.posts limit:6 %}
      <a class="glass-card accent-cyan" href="{{ post.url | relative_url }}" style="text-decoration:none;display:block;" data-aos="fade-up">
        <span class="timeline-when">{{ post.date | date: "%b %-d, %Y" }}</span>
        <h3 style="margin-top:0.5rem;">{{ post.title }}</h3>
        <p>{{ post.excerpt | strip_html | truncate: 140 }}</p>
        <span class="pill-link ghost"><i class="fas fa-arrow-right"></i> Read more</span>
      </a>
      {% endfor %}
    </div>
  </div>
</section>
{% endif %}

<section class="page-section alt">
  <div class="container">
    <div class="section-header" data-aos="fade-up">
      <span class="section-eyebrow">In the Works</span>
      <h2 class="section-title">Coming Soon: In-Depth Series</h2>
    </div>

    <div class="card-grid">
      <div class="glass-card accent-blue" data-aos="fade-up">
        <h4>Building OnlySportsLM</h4>
        <p>A complete walkthrough of designing, training, and deploying a specialized language model.</p>
      </div>
      <div class="glass-card accent-purple" data-aos="fade-up" data-aos-delay="100">
        <h4>Efficient AI Architectures</h4>
        <p>How to build powerful models with fewer parameters through smart design choices.</p>
      </div>
      <div class="glass-card accent-green" data-aos="fade-up" data-aos-delay="200">
        <h4>MLOps at Scale</h4>
        <p>From research prototype to production system — lessons from the trenches.</p>
      </div>
    </div>
  </div>
</section>

<section class="page-section aurora">
  <div class="container">
    <div class="banner-cta" data-aos="zoom-in">
      <h2>Stay in the Loop</h2>
      <p>Follow along for new deep dives, or suggest a topic you'd like me to explore.</p>
      <a href="mailto:seanxie249@gmail.com?subject=Blog%20Topic%20Suggestion" class="btn-solid"><i class="fas fa-lightbulb"></i> Suggest a Topic</a>
    </div>
  </div>
</section>
