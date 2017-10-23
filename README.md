# Haiku Composer

This web application allows you to compose haikus.

![Website](https://user-images.githubusercontent.com/244426/31552127-27faf5fc-affc-11e7-9477-19d001a174ea.png)

## Build

Install Habitat

    # Enter the Habitat Studio
    $ hab studio enter

    $ build haproxy
    $ hab pkg export docker results/YOURORG-haproxy....hart

    $ build haikus
    $ hab pkg export docker results/YOURORG-haikus....hart

    # The mongodb image has already been posted to Docker
    # So it does not need to be built.
    # I also had a hard time trying to build it.
    # https://github.com/habitat-sh/core-plans/issues/856
    # And I've heard that it takes a long time to build
    # https://github.com/habitat-sh/core-plans/issues/202

    $ exit

## Deploy

Install Docker and Docker Compose

Update the `docker-compose.yml` to use YOURORG instead of mine.

## Run

    $ docker-compose up

I had to restart it once because something didn't start in the right order.
