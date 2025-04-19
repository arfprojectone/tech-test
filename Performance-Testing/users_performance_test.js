import http from 'k6/http';
import { check } from 'k6';
import { Trend, Rate, Counter } from 'k6/metrics';

// Custome matrix
let responseTime = new Trend('response_time');
let errorRate = new Rate('error_rate');
let successCount = new Counter('success_count');
let slowRequests = new Counter('slow_requests');

export default function () {
  let res = http.get('https://reqres.in/api/users');

  let isSuccess = check(res, { 'Status Response Code 200 OK': (r) => r.status === 200 });

  let duration = res.timings.duration;
  responseTime.add(duration);
  errorRate.add(!isSuccess);

  if (isSuccess) successCount.add(1);
  if (duration > 500) slowRequests.add(1);
}
