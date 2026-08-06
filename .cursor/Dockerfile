FROM ruby:3.1-bookworm

# github-pages pins liquid 4.0.3, which needs Ruby < 3.2 (tainted? was removed in 3.2)
RUN apt-get update \
    && apt-get install -y --no-install-recommends git curl build-essential \
    && rm -rf /var/lib/apt/lists/*

RUN gem install bundler --no-document
