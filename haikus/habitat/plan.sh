pkg_name=haikus
pkg_origin=franklinwebber
pkg_version="0.1.0"
pkg_scaffolding="core/scaffolding-node"

pkg_binds=(
  [database]="port"
)

# pkg_exposes=(port)
pkg_exports=(
  [port]=app.port
)

declare -A scaffolding_env

# Define path to config file
scaffolding_env[APP_CONFIG]="{{pkg.svc_config_path}}/config.json"
