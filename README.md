# Opioids.gov


## Architecture

This is a [Jekyll-based](http://jekyllrb.com/) website designed to be published on the
[Federalist](https://federalist.18f.gov/) platform.

The website utilizes the [US Web Design Standards](https://standards.usa.gov/).

## Setup

### Prerequisites

#### Ruby

Since this is a Jekyll-based website, you will need [Ruby](https://www.ruby-lang.org/en/). The best way to get
Ruby is to install it via [rbenv](https://github.com/rbenv/rbenv). See the
[rbenv installation instructions](https://github.com/rbenv/rbenv#installation)
to set it up on your system.

### Building and Previewing

First, install Ruby gem dependencies:

```
bundle install
```

Then you can run the site locally with live reloading:

```
bundle exec jekyll serve
```

You should now be able to preview the site on your local machine at [http://localhost:4000/](http://localhost:4000/).

## Contributing

### Contributing content and code

1. Fork the repository (or clone it if you have commit access)
2. Create a feature branch
3. Make your changes in the feature branch
4. Commit the feature branch
5. Push the feature branch to GitHub
6. Open a pull request to merge the feature branch

### Proposing changes and reporting issues

The best way to contact us regarding this is to [open an issue on GitHub](https://github.com/GSA/opstat/issues/new). Please submit a new issue if you need to:

* Report a website bug
* Propose a change to the website content

## Deploying

We make use of Federalist's continuous deployment system, which automatically deploys branches as soon as it detects a push to GitHub. Therefore, as soon as your pull request is accepted into the `master` branch, it goes to production.

## License

As a work of the United States Government, this project is in the public domain
within the United States.