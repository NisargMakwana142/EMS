package com.nisarg.emsBackend.service.implementation;

import com.nisarg.emsBackend.dto.EmployeeDto;
import com.nisarg.emsBackend.entity.Employee;
import com.nisarg.emsBackend.mapper.EmployeeMapper;
import com.nisarg.emsBackend.repository.EmployeeRepository;
import com.nisarg.emsBackend.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {

        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee = employeeRepository.save(employee);

        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }
}
