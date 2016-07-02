
json.array!(@runroutes) do |runroute|
  json.partial!('api/run_routes/runroute', runroute: runroute)
end
