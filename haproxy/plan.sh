pkg_origin=franklinwebber
pkg_name=haproxy
pkg_description="The Reliable, High Performance TCP/HTTP Load Balancer"
pkg_version=1.6.11
pkg_maintainer="The Chef Training Team <training@chef.io>"
pkg_license=('GPL-2.0' 'LGPL-2.1')
pkg_svc_run="haproxy -f $pkg_svc_config_path/haproxy.conf -db"
pkg_svc_user="root"
pkg_svc_group="root"
pkg_exports=(
  [port]=front-end.port
  [status-port]=status.port
)
pkg_exposes=(port status-port)
pkg_binds=(
  [backend]="port"
)
pkg_deps=(core/haproxy)

do_download() {
    return 0
}

do_build() {
    return 0
}

do_install() {
    return 0
}
