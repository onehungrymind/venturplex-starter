# Welcome To The Core Data Library

This library is created for the sole purpose of holding all business logic (services) of any given app in one place. Depending on the structure of the application we mainly hold any feature service that will be later used as NGRX features.

## Creating a Service

To add a new service you will need to run the following command:

```sh
  ng g [service-name] --project core-data
```

The `--project` flag will ensure that the service gets generated within _this_ library.

## Make Service Available

Once the service has been generated/created, you will need to expose the service to the rest of the application. You can do so by following these steps:

- Each service should be decorated with the `@Injectable()` decorator. Please ensure that `{providedIn: 'root'}` is inside of the decorator like so: `@Injectable({providedIn: 'root'})`.
- In the `src/index.ts` file export and organize your service.
