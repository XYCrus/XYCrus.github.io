---
layout: collection
title: "Portfolio"
permalink: /portfolio/
collection: portfolio
entries_layout: grid
classes: wide
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /pic/cenote_beam.png
  caption: "Diving deep into innovation"
intro: 
  - excerpt: "Welcome to my digital showcase—a collection of projects where cutting-edge AI meets real-world impact. From language models that understand sports better than seasoned analysts to data pipelines that process billions of tokens, each project represents a step forward in making intelligent systems more efficient, accessible, and powerful."
feature_row:
  - image_path: /assets/images/onlysportslm-teaser.jpg
    alt: "OnlySportsLM"
    title: "OnlySportsLM"
    excerpt: "Revolutionary 196M-parameter sports-specialized language model achieving 37.6% accuracy improvement over previous baselines. Published at NeurIPS 2024 ENLSP Workshop."
    url: "/portfolio/onlysportslm/"
    btn_label: "Explore Project"
    btn_class: "btn--primary"
  - image_path: /assets/images/data-pipeline-teaser.jpg
    alt: "Scalable Data Pipeline"
    title: "Billion-Token Data Pipeline"
    excerpt: "End-to-end data engineering solution processing 600B+ tokens of sports content using Azure Synapse, Hadoop, and custom filtering algorithms."
    url: "/portfolio/data-pipeline/"
    btn_label: "View Details"
    btn_class: "btn--primary"
  - image_path: /assets/images/sports-analytics-teaser.jpg
    alt: "Real-time Sports Analytics"
    title: "Real-time Sports Analytics"
    excerpt: "Live game analysis system providing tactical insights, win probability calculations, and player performance metrics using advanced ML algorithms."
    url: "/portfolio/sports-analytics/"
    btn_label: "See Demo"
    btn_class: "btn--primary"
feature_row2:
  - image_path: /assets/images/ml-optimization-teaser.jpg
    alt: "ML Model Optimization"
    title: "Neural Architecture Optimization"
    excerpt: "Custom RWKV-v6 implementation with novel 'deep-and-thin' architecture design, achieving 5x faster inference while maintaining accuracy."
    url: "/portfolio/model-optimization/"
    btn_label: "Technical Details"
    btn_class: "btn--primary"
  - image_path: /assets/images/visualization-teaser.jpg
    alt: "Interactive Visualizations"
    title: "Advanced Data Visualizations"
    excerpt: "Interactive dashboards and visualizations using Power BI, Tableau, and D3.js for complex sports statistics and AI model performance metrics."
    url: "/portfolio/visualizations/"
    btn_label: "View Gallery"
    btn_class: "btn--primary"
  - image_path: /assets/images/research-teaser.jpg
    alt: "Research Contributions"
    title: "Research & Publications"
    excerpt: "Academic contributions to ML conferences, open-source projects, and technical blog posts sharing insights on efficient AI and sports analytics."
    url: "/portfolio/research/"
    btn_label: "Read Papers"
    btn_class: "btn--primary"
---

{% include feature_row id="intro" type="center" %}

<div style="text-align: center; margin: 3rem 0;">
  <h2 style="font-size: 2.5rem; margin-bottom: 1rem; background: linear-gradient(135deg, #3b82f6, #8b5cf6); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Featured Projects</h2>
  <p style="font-size: 1.1rem; color: #666; max-width: 600px; margin: 0 auto;">Each project represents a unique challenge solved through innovative application of machine learning, data engineering, and creative problem-solving.</p>
</div>

{% include feature_row %}

<div style="text-align: center; margin: 4rem 0 2rem;">
  <h2 style="font-size: 2rem; margin-bottom: 1rem;">Additional Work</h2>
</div>

{% include feature_row id="feature_row2" %}

<section style="background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); padding: 4rem 2rem; margin: 4rem 0; border-radius: 1rem;">
  <div style="max-width: 800px; margin: 0 auto; text-align: center;">
    <h2 style="color: #1e293b; margin-bottom: 1rem;">Technical Highlights</h2>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem; margin: 2rem 0;">
      <div style="text-align: center;">
        <div style="font-size: 2.5rem; font-weight: bold; color: #3b82f6;">600B+</div>
        <div style="color: #64748b;">Tokens Processed</div>
      </div>
      <div style="text-align: center;">
        <div style="font-size: 2.5rem; font-weight: bold; color: #8b5cf6;">37.6%</div>
        <div style="color: #64748b;">Accuracy Improvement</div>
      </div>
      <div style="text-align: center;">
        <div style="font-size: 2.5rem; font-weight: bold; color: #06d6a0;">90%</div>
        <div style="color: #64748b;">Parameter Reduction</div>
      </div>
      <div style="text-align: center;">
        <div style="font-size: 2.5rem; font-weight: bold; color: #f59e0b;">5x</div>
        <div style="color: #64748b;">Faster Inference</div>
      </div>
    </div>
    
    <p style="color: #475569; margin-top: 2rem; font-style: italic;">
      "Innovation isn't just about building something new—it's about building something better, smarter, and more accessible than what came before."
    </p>
  </div>
</section>

<div style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); color: white; padding: 3rem 2rem; margin: 4rem 0; border-radius: 1rem; text-align: center;">
  <h2 style="margin-bottom: 1rem;">Open Source Contributions</h2>
  <p style="margin-bottom: 2rem; opacity: 0.9;">Committed to advancing the ML community through open research and accessible tools.</p>
  
  <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
    <a href="https://github.com/chrischenhub/OnlySportsLM" target="_blank" style="background: #3b82f6; color: white; padding: 0.75rem 1.5rem; border-radius: 0.5rem; text-decoration: none; display: inline-flex; align-items: center; gap: 0.5rem;">
      <i class="fab fa-github"></i>
      OnlySportsLM Code
    </a>
    <a href="https://neurips2024-enlsp.github.io/papers/paper_21.pdf" target="_blank" style="background: #8b5cf6; color: white; padding: 0.75rem 1.5rem; border-radius: 0.5rem; text-decoration: none; display: inline-flex; align-items: center; gap: 0.5rem;">
      <i class="fas fa-file-pdf"></i>
      Research Paper
    </a>
    <a href="https://github.com/XYCrus" target="_blank" style="background: #06d6a0; color: white; padding: 0.75rem 1.5rem; border-radius: 0.5rem; text-decoration: none; display: inline-flex; align-items: center; gap: 0.5rem;">
      <i class="fab fa-github"></i>
      All Projects
    </a>
  </div>
</div>

<div style="text-align: center; margin: 4rem 0;">
  <h2 style="margin-bottom: 1rem;">Want to Collaborate?</h2>
  <p style="color: #666; margin-bottom: 2rem;">I'm always excited to work on innovative projects that push the boundaries of what's possible with AI and data science.</p>
  <a href="/contact" style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); color: white; padding: 1rem 2rem; border-radius: 0.5rem; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 0.5rem;">
    <i class="fas fa-rocket"></i>
    Let's Build Something Amazing
  </a>
</div>
