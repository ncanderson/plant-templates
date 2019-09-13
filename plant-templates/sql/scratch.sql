
-- begin transaction;

-- insert into  application_user (
-- 	user_id, 
--     name_user,
--     login_user,
--     email_user,
--     password_hash,
--     password_salt,
--     date_created
-- )
-- select 
-- 	uuid_generate_v4(),
--     'Nate Anderson',
--     'nanderson',
--     'nathanaelcanderson@gmail.com',
--     null,
--     uuid_generate_v4(),
--     now();

-- rollback;


select *
from application_user;

select *
from week;

select *
from fn_get_all_weeks();


    select 
    	w.week_id,
        w.description,
        w.date_created
    from week w
    order by date_created desc;



-- insert into week (week_id, description, date_created, created_by)
-- values 
-- 	(uuid_generate_v4(), 'Test Week 1', now(), '80c196df-eb24-4fcb-a629-bc305a90f737'),
-- 	(uuid_generate_v4(), 'Test Week 2', now(), '80c196df-eb24-4fcb-a629-bc305a90f737')


