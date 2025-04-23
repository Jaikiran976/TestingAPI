var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//app.UseHttpsRedirection();

// Allow any origin, header, and method (for CORS)
app.UseCors(policy => policy.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());

app.UseAuthorization();

// Map controllers (API routes)
app.MapControllers();

// Set up the port to bind to dynamically (for Render) or fallback to 5000 for local dev
var port = Environment.GetEnvironmentVariable("PORT") ?? "5000";  // Render provides dynamic PORT, fallback to 5000 for local dev

// Configure the server to listen on the dynamic port
app.UseUrls($"http://0.0.0.0:{port}");  // Bind to all network interfaces on the specified port

app.Run();
